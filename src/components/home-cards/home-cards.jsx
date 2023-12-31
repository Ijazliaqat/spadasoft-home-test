import React from "react";
import useHomeCards from "./useHomeCards";

const HomeSlices = () => {
  const {
    heroInputFields,
    articleInputFields,
    priceInputFields,
    addHeroFields,
    addArticleFields,
    addPriceFields,
    errorsHeroSlice,
    errorsArticleSlice,
    errorsPriceSlice,
    handleInputChange,
    handleArticleInputChange,
    handlePriceInputChange,
    removeField,
    removeArticleField,
    removePriceField,
    handleSubmit,
  } = useHomeCards();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="border p-5 rounded-xl hover:-translate-y-1 hover:scale-105">
            <div
              onClick={addHeroFields}
              className="bg-[#F5F2FF] hover:bg-[#EDE9FE] text-white h-36 flex items-center justify-center rounded-xl cursor-pointer"
            >
              <div className="w-8 h-8 font-bold mr-3 inline-flex items-center justify-center rounded-full bg-[#AA99EC] hover:bg-[#6E56CF]  text-white">
                +
              </div>
            </div>
            <span className="flex justify-center text-xs font-bold text-[#6F6E77] mt-1">
              Hero
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="border p-5 rounded-xl hover:-translate-y-1 hover:scale-105">
            <div
              onClick={addArticleFields}
              className="bg-[#E9F9EE] hover:bg-[#DDF3E4] text-white h-36 flex items-center justify-center rounded-xl cursor-pointer"
            >
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#5BB98C] hover:bg-[#30A46C ] text-white">
                +
              </div>
            </div>
            <span className="flex justify-center text-xs font-bold text-[#6F6E77] mt-1">
              Article
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="border p-5 rounded-xl hover:-translate-y-1 hover:scale-105">
            <div
              onClick={addPriceFields}
              className="bg-[#FFF4D5] hover:bg-[#FFECBC] text-white h-36 flex items-center justify-center rounded-xl cursor-pointer"
            >
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#F3BA63] hover:bg-[#FFB224] text-white">
                +
              </div>
            </div>
            <span className="flex justify-center text-xs font-bold text-[#6F6E77] mt-1">
              Price
            </span>
          </div>
        </div>
      </div>

      <div>
        <button className="bg-gray-300 hover:bg-gray-400 text-[#6F6E77] font-bold py-2 px-4 rounded inline-flex items-center m-4 "
          onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          {heroInputFields.length ? (
            <div className="border p-5 rounded-xl">
              {heroInputFields?.map((field, index) => (
                <div key={field.id} className="mt-2">
                  <div className="flex justify-between pb-2 items-center">
                    <h2 className="text-sm font-bold text-[#1A1523]">Hero slice</h2>
                    <button
                      className="bg-[#FFF0EE] rounded px-4 py-1"
                      onClick={() => removeField(field.id)}
                    >
                      <span className="text-orange-600 text-xs font-bold">
                        Remove Field
                      </span>
                    </button>
                  </div>
                  <div>
                    <input
                      className="border w-full mb-2 rounded-lg h-9 px-2 focus:outline-0"
                      type="text"
                      placeholder="Full Name"
                      value={field.value1}
                      onChange={(e) =>
                        handleInputChange(field.id, "value1", e.target.value)
                      }
                    />
                    {errorsHeroSlice[index] &&
                      errorsHeroSlice[index].value1 && (
                        <p>{errorsHeroSlice[index].value1}</p>
                      )}
                    <input
                      type="text"
                      className="border w-full rounded-lg h-9 px-2 focus:outline-0"
                      placeholder="Email"
                      value={field.value2}
                      onChange={(e) =>
                        handleInputChange(field.id, "value2", e.target.value)
                      }
                    />
                    {errorsHeroSlice[index] &&
                      errorsHeroSlice[index].value2 && (
                        <p>{errorsHeroSlice[index].value2}</p>
                      )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          {articleInputFields.length ? (
            <div className="border p-5 rounded-xl">
              {articleInputFields?.map((field, index) => (
                <div key={field.id} className="mt-2">
                  <div className="flex justify-between pb-2 items-center">
                    <h2 className="text-sm font-bold text-[#1A1523]">Article slice</h2>
                    <button
                      className="bg-[#FFF0EE] rounded px-4 py-1"
                      onClick={() => removeArticleField(field.id)}
                    >
                      <span className="text-orange-600 text-xs font-bold">
                        Remove Field
                      </span>
                    </button>
                  </div>
                  <div>
                    <input
                      className="border w-full mb-2 rounded-lg h-9 px-2 focus:outline-0"
                      type="text"
                      placeholder="Article Title"
                      value={field.value1}
                      onChange={(e) =>
                        handleArticleInputChange(
                          field.id,
                          "value1",
                          e.target.value
                        )
                      }
                    />
                    {errorsArticleSlice[index] &&
                      errorsArticleSlice[index].value1 && (
                        <p>{errorsArticleSlice[index].value1}</p>
                      )}
                    <input
                      type="text"
                      className="border w-full rounded-lg h-9 mb-2 px-2 focus:outline-0"
                      placeholder="Artile Keywords"
                      value={field.value2}
                      onChange={(e) =>
                        handleArticleInputChange(
                          field.id,
                          "value2",
                          e.target.value
                        )
                      }
                    />

                    <input type="color"
                      value={field.value3}
                      onChange={(e) =>
                        handleArticleInputChange(
                          field.id,
                          "value3",
                          e.target.value
                        )
                      } />
                    {errorsArticleSlice[index] &&
                      errorsArticleSlice[index].value2 && (
                        <p>{errorsArticleSlice[index].value2}</p>
                      )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          {priceInputFields.length ? (
            <div className="border p-5 rounded-xl">
              {priceInputFields?.map((field, index) => (
                <div key={field.id} className="mt-2">
                  <div className="flex justify-between pb-2 items-center">
                    <h2 className="text-sm font-bold text-[#1A1523]">Price slice</h2>
                    <button
                      className="bg-[#FFF0EE] rounded px-4 py-1"
                      onClick={() => removePriceField(field.id)}
                    >
                      <span className="text-orange-600 text-xs font-bold">
                        Remove Field
                      </span>
                    </button>
                  </div>
                  <div>
                    <input
                      className="border w-full mb-2 rounded-lg h-9 px-2 focus:outline-0"
                      type="text"
                      placeholder="First price"
                      value={field.value1}
                      onChange={(e) =>
                        handlePriceInputChange(
                          field.id,
                          "value1",
                          e.target.value
                        )
                      }
                    />
                    {errorsPriceSlice[index] &&
                      errorsPriceSlice[index].value1 && (
                        <p>{errorsPriceSlice[index].value1}</p>
                      )}
                    <input
                      type="text"
                      className="border w-full rounded-lg h-9 px-2 focus:outline-0"
                      placeholder="Second price"
                      value={field.value2}
                      onChange={(e) =>
                        handlePriceInputChange(
                          field.id,
                          "value2",
                          e.target.value
                        )
                      }
                    />
                    {errorsPriceSlice[index] &&
                      errorsPriceSlice[index].value2 && (
                        <p>{errorsPriceSlice[index].value2}</p>
                      )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default HomeSlices;