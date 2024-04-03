"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiGridFill } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import { GetAllArticlesApi } from "@/store/actions/campaign";
import ArticleCard from "@/Components/Cards/ArticleCard";
import Skeleton from "react-loading-skeleton";
import ArticleCardSkeleton from "@/Components/Skeleton/ArticleCardSkeleton";
import ArticleHorizonatalCard from "@/Components/Cards/ArticleHorizonatalCard";
import { translate } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { languageData } from "@/store/reducer/languageSlice";
import { settingsData } from "@/store/reducer/settingsSlice";
import NoData from "@/Components/NoDataFound/NoData";
import Link from "next/link";
import {
  articlecachedataCategoryId,
  categoriesCacheData,
} from "@/store/reducer/momentSlice";
import Layout from "../Layout/Layout";
import BlogsMainMenu from "@/Components/BlogsMainMenu/BlogsMainMenu";
import BlogsDetailsCard from "@/Components/BlogsMainMenu/BlogsDetailsCard";
import BlogsDetailsRowCard from "@/Components/BlogsMainMenu/BlogsDetailsRowCard";
import Image from "next/image";
import AdvertiseSection from "@/Components/AdvertiseSection/AdvertiseSection";
const Articles = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [expandedStates, setExpandedStates] = useState([]);
  const [grid, setGrid] = useState(false);

  const [getArticles, setGetArticles] = useState([]);
  const [total, setTotal] = useState(0);
  const [offsetdata, setOffsetdata] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true); // Track if more data is available
  const limit = 3;
  const lang = useSelector(languageData);
  const Categorydata = useSelector(categoriesCacheData);
  const ArticleCateId = useSelector(articlecachedataCategoryId);

  useEffect(() => {
    loadArticles(true);
  }, [ArticleCateId, lang, grid]);

  const loadArticles = (reset = false, cateID = ArticleCateId) => {
    setIsLoading(true);
    const offset = reset ? 0 : offsetdata;
    GetAllArticlesApi({
      category_id: cateID ? cateID : "",
      limit,
      offset,
      onSuccess: (response) => {
        const Articles = response.data;
        setTotal(response.total);
        setIsLoading(false);
        if (reset) {
          setGetArticles(Articles);
        } else {
          setGetArticles((prevArticles) => [...prevArticles, ...Articles]);
        }
        setExpandedStates(new Array(offset + Articles.length).fill(false));
        setOffsetdata(offset + limit);
        setHasMoreData(Articles.length === limit);
      },
      onError: (error) => {
        console.log(error);
        setIsLoading(false);
      },
    });
  };

  const SettingsData = useSelector(settingsData);
  const PlaceHolderImg = SettingsData?.web_placeholder_logo;

  const getArticleByCategory = (cateId) => {
    setOffsetdata(0);
    loadArticles(true, cateId);
  };

  const getGeneralArticles = () => {
    setOffsetdata(0);
    loadArticles(true);
  };
  return (
    <Layout>
      {/* <Breadcrumb title={translate("articles")} /> */}

      <div className="max-w-[1280px] mx-auto mt-2 mb-5">
        <BlogsMainMenu Categorydata={Categorydata} />
        <div className="grid grid-cols-12 gap-3 md:mx-4 ">
          <div className="md:col-span-8 col-span-12 md:border-r-[1px] border-[#BBBBBB] md:pr-4 ">
            <div className="grid sm:grid-cols-2 grid-cols-1 marginX1  md:gap-3 gapBlog  mt-4">
              {getArticles.map((elem, index) => (
                <BlogsDetailsCard key={index} elem={elem} />
              ))}
            </div>
          </div>
          <div className="col-span-4 hidden md:block mt-4">
            {/* <div>
              <input
                type="text"
                value=""
                placeholder="Search..."
                style={{ border: "1px solid #333" }}
                className={`block w-full pl-10 pr-3 py-2 rounded-[8px] h-[56px] bg-transparent focus:outline-none focus:ring-indigo-500 sm:text-sm`}
              />
            </div> */}
            <div className="">
              <h2 className="text-[#BBBBBB] text-[14px] font-[500] ">
                POPULAR POSTS
              </h2>
              <div className="relative mt-2">
                <div className="h-1 w-full bg-[#FFFFFF] rounded"></div>
                <div className="h-1 w-[48%] absolute top-0 bg-[#5C2289] rounded"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4 gap-y-3 ">
              {getArticles.map((elem, index) => (
                <div
                  key={index}
                  className=" border-b-[1px] pb-3 border-[#BBBBBB]"
                >
                  <BlogsDetailsRowCard elem={elem} />
                </div>
              ))}
            </div>
            <div className="text-[#BBBBBB] text-[14px] font-[500] mt-3 uppercase ">
              Stay in touch
            </div>
            <div className="flex space-x-4 mt-3">
              <Link href="#">
                <Image
                  src="/linkedin 1.svg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/facebook 1.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/instagram-fill 1.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#" target="_blank">
                <Image
                  src="/flowbite_x-solid.svg"
                  alt="Twitter"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="all-articles">
        <div id="all-articles-content">
          <div className="container">
            <div className="row" id="main-content">
              <div className="col-12 col-md-6 col-lg-9">
                <div className="all-article-rightside">
                  {total ? (
                    <>
                      <div className="card">
                        <div
                          className="card-body"
                          id="all-article-headline-card"
                        >
                          <div>
                            <span>
                              {total > 0 ? total : 0}{" "}
                              {translate("articleFound")}
                            </span>
                          </div>
                          <div className="grid-buttons">
                            <button
                              className="mx-3"
                              id="layout-buttons"
                              onClick={() => setGrid(true)}
                            >
                              <AiOutlineUnorderedList size={25} />
                            </button>
                            <button
                              id="layout-buttons"
                              onClick={() => setGrid(false)}
                            >
                              <RiGridFill size={25} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                  {getArticles && getArticles.length > 0 ? (
                    !grid ? (
                      <div className="all-prop-cards" id="rowCards">
                        <div className="row" id="all-articles-cards">
                          {isLoading
                            ? Array.from({
                                length: getArticles ? getArticles.length : 6,
                              }).map((_, index) => (
                                <div
                                  className="col-sm-12 col-md-6 col-lg-4 loading_data"
                                  key={index}
                                >
                                  <ArticleCardSkeleton />
                                </div>
                              ))
                            : getArticles?.map((ele, index) => (
                                <div
                                  className="col-12 col-md-6 col-lg-4"
                                  key={index}
                                >
                                  <ArticleCard
                                    ele={ele}
                                    expandedStates={expandedStates}
                                    index={index}
                                  />
                                </div>
                              ))}
                        </div>
                      </div>
                    ) : (
                      <div id="columnCards">
                        <div className="row">
                          {isLoading
                            ? 
                              Array.from({
                                length: getArticles ? getArticles.length : 6,
                              }).map((_, index) => (
                                <div
                                  className="col-sm-12 col-md-6 col-lg-4 loading_data"
                                  key={index}
                                >
                                  <ArticleCardSkeleton />
                                </div>
                              ))
                            : getArticles?.map((ele, index) => (
                                <div
                                  className="col-12 "
                                  id="horizonatal_articles"
                                  key={index}
                                >
                                  <ArticleHorizonatalCard
                                    ele={ele}
                                    expandedStates={expandedStates}
                                    index={index}
                                    PlaceHolderImg={PlaceHolderImg}
                                  />
                                </div>
                              ))}
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="noDataFoundDiv">
                      <NoData />
                    </div>
                  )}
                  {hasMoreData && (
                    <div className="col-12 loadMoreDiv" id="loadMoreDiv">
                      <button
                        className="loadMore"
                        onClick={() => loadArticles(false)}
                      >
                        {translate("loadmore")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="all-articles-leftside">
                  <div className="cate-card">
                    <div className="card">
                      <div className="card-header">
                        {translate("categories")}
                      </div>
                      <div className="card-body">
                        <div className="cate-list">
                          <span>{translate("General")}</span>
                          <IoMdArrowDropright
                            size={25}
                            className="cate_list_arrow"
                            onClick={getGeneralArticles}
                          />
                        </div>
                        {Categorydata &&
                          Categorydata.map((elem, index) => (
                            <div className="cate-list" key={index}>
                              <span>{elem.category}</span>
                              <IoMdArrowDropright
                                size={25}
                                className="cate_list_arrow"
                                onClick={() => {
                                  getArticleByCategory(elem.id);
                                }}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="popular-tag-card">
                    <div className="card">
                      <div className="card-header">Popular Tags</div>
                      <div className="card-body">
                        <div className="pop-tags">
                          <span>apartment</span>
                          <span>modern</span>
                          <span>building</span>
                          <span>luxarious</span>
                          <span>real estate</span>
                          <span>Villa</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
         <AdvertiseSection />
    </Layout>
  );
};

export default Articles;
