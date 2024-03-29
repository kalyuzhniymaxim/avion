import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';

import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

import '../scss/app.scss';

import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import CenterMode from '../Carousel';
import headerImg from '../assets/img/header.jpg';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;

  const { searchValue } = React.useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchPizzas = () => {
    setIsLoading(true);
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://65465230fe036a2fa95583da.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    // window.scrollTo(1800, 1800);
  };
  // если был первый рендерб, то проверяем URL -параметры и сохраняем в редуксе
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);
  // если был первый рендер, то запрашиваем 
  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);

  // еслли изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const quryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${quryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...Array(4)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="content-wrapper">
      <div className="container">
        <img className="hedear__img" src={headerImg} alt="" />
        <h2 className="content__title">Почему Выбирая нас</h2>
        <CenterMode />
        <h2 className="content__title">Наши товары</h2>
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>

        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        <h2 className="content__title">Отзывы</h2>
        <div className="content-bottom">
          <Reviews />
        </div>

      </div>
      <div className="footer">
          <div className="container">
          <Footer />
          </div>
        </div>
    </div>
  );
};

export default Home;
