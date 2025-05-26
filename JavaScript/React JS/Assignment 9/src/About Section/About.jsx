import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BasicRating from "./BasicRating";
import { Col, Row } from "react-bootstrap";
import About_rating from "./About_rating";

const About = () => {
  const { user } = use(AuthContext);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [install, setInstall] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const storedData = localStorage.getItem("AppData");
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setData(parsedData);
        } catch (e) {
          console.error("Error parsing JSON:", e);
        }
      }
    }, 1000);
  }, []);

  useEffect(() => {
    setIsDisabled(counter % 2 === 0);
  }, [counter]);

  const handleInstall = () => {
    setInstall(!install);
    setCounter(counter + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const commentObj = {
      id: Date.now(),
      name: user.displayName,
      text: newComment,
    };

    setComments([commentObj, ...comments]);
    setNewComment("");
  };

  const [data, setData] = useState(null);

  

  if (!data) return <div className="text-center py-10">Loading...</div>;

  return (
    <div>
      {/* Banner Section */}
      <div
        className="bg-cover bg-center text-white h-[80vh] sm:h-[90vh] lg:h-screen"
        style={{ backgroundImage: `url(${data.banner})` }}
      >
        <div className="w-full h-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 bg-radial-[at_120%_50%] from-transparent via-blafrom-transparent to-black">
          <div className="max-w-screen-xl mx-auto">
            {/* Game Cover */}
            <div className="bg-cover bg-center h-[200px] sm:h-[250px] md:h-[300px] rounded-xl mb-8 sm:mb-10" />

            {/* Game Info */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {data.name} : {data.subtitle}
              </h1>
              <p className="text-base sm:text-lg text-green-400">
                {data.category}
              </p>
              <p className="text-sm text-gray-400">{data.developer}</p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                      readOnly
                    />
                  </div>
                  <span className="text-sm">{data.rating}★</span>
                  <span className="text-gray-500">(37.2M reviews)</span>
                </div>

                <div className="text-sm">{data.downloads}+ Downloads</div>

                <div className="flex items-center gap-1 text-sm">
                  <span className="border border-white px-1">12+</span>
                  <span>Rated for 12+</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6">
                <button
                  onClick={handleInstall}
                  className="btn btn-success btn-sm sm:btn-md md:btn-wide text-sm sm:text-base"
                >
                  {install ? "Uninstall" : "Install"}
                </button>
                <button className="btn btn-ghost btn-sm sm:btn-md">
                  Share
                </button>
                <button className="btn btn-ghost btn-sm sm:btn-md">
                  Add to wishlist
                </button>
                <button className="btn btn-neutral btn-sm sm:btn-md">
                  ▶ Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 my-10">
        <div>
          <h1 className="text-base-content text-xl sm:text-2xl font-semibold">
            About this Application
          </h1>
          <p className="text-base-content text-sm sm:text-base lg:text-lg font-normal mt-2 text-justify">
            {data.description}
          </p>
        </div>

        {/* Features */}
        {Array.isArray(data.features) && (
          <>
            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-2">
              Key Features
            </h2>
            <ul className="list-disc list-inside">
              {data.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-base-content text-sm sm:text-base lg:text-lg font-normal mt-2 text-justify"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </>
        )}

        <BasicRating rating={data.rating} />

        {/* Reviews */}
        <Row className="text-base-content text-xl sm:text-2xl font-semibold mt-6 sm:mt-8">
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <h3 className="mb-3">Reviews</h3>

            {Array.isArray(data.reviews) && data.reviews.length > 0 ? (
              <div className="space-y-4 mt-4">
                {data.reviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg shadow-lg bg-base-100"
                  >
                    <div className="flex gap-2 items-center">
                      <p className="font-semibold text-lg">{review.user}</p>
                      <p className="text-sm text-yellow-500">
                        Rating: {review.rating} ⭐
                      </p>
                    </div>
                    <p className="text-base-content mt-1 font-normal text-base">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500"></p>
            )}

            {/* Comments */}
            <div className="space-y-3 mt-4">
              {comments.length === 0 && <p className="text-muted"></p>}
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="p-3 text-base font-normal bg-base-100"
                >
                  <p className="text-lg text-base-content font-semibold">
                    {comment.name}
                  </p>
                  {comment.text}
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h1 className="text-base-content text-xl sm:text-2xl font-semibold">
                Rate this APP
              </h1>
              <div>
                <About_rating isdisabled={isDisabled} />
              </div>
            </div>

            {/* Comment Form */}
            <form className="my-4" onSubmit={handleCommentSubmit}>
              <textarea
                className="form-control w-full text-base-content text-base font-normal placeholder:font-normal placeholder:text-base mb-2"
                rows="3"
                placeholder="Write your review..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <div
                className="tooltip tooltip-bottom"
                data-tip={
                  isDisabled
                    ? "Please install for minimum one time to submit your review"
                    : ""
                }
              >
                <button
                  disabled={isDisabled}
                  type="submit"
                  className={`btn btn-success mb-4 ${
                    isDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Submit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
