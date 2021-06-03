const MAX_LISTED_IMAGES = 2;
const MIN_LISTED_IMAGES = 1;

const CollectionGridItem = ({ item = {}, collectionsMeta = [] }) => {
  const realStateIds = item?.attributes?.real_estate_ids || [];

  const images = collectionsMeta
    .filter((meta) => realStateIds.indexOf(parseInt(meta.id, 10)) > -1)
    .map((meta) => meta.attributes?.gallery_urls[0]);

  const showMore = images.length > MAX_LISTED_IMAGES;
  const fullWidth = realStateIds.length === MIN_LISTED_IMAGES ? "col-span-10" : "col-span-5";
  const halfWidth = realStateIds.length === MAX_LISTED_IMAGES ? "col-span-5" : "col-span-3";

  return (
    <figure>
      <div className="text-center relative h-48 rounded-lg">
        <div className="grid grid-cols-10 h-full">
          {realStateIds.length ? (
            <>
              <div
                className={`bg-cover bg-no-repeat bg-green-200 ${fullWidth} rounded-lg relative border-r-2 border-white z-20`}
                style={{
                  backgroundImage: `url("${images[0]}")`,
                }}
              />
              {realStateIds.length >= MAX_LISTED_IMAGES && (
                <div
                  className={`bg-cover bg-no-repeat bg-green-200 ${halfWidth} rounded-r-lg relative border-r-2 border-white z-10 -ml-1`}
                  style={{
                    backgroundImage: `url("${images[1]}")`,
                  }}
                />
              )}
              {showMore && (
                <div className="flex relative w-full h-full col-span-2 justify-center items-center relative z-0 -ml-1">
                  <div
                    className="relative w-full h-full bg-cover bg-no-repeat col-span-2 rounded-r-lg"
                    style={{
                      backgroundImage: `url("${images[2]}")`,
                    }}
                  />
                  <div className="absolute w-full h-full bg-jungle opacity-70 rounded-r-lg"></div>
                  <h2 className="absolute text-white font-semibold text-lg">
                    {`+${realStateIds.length - MAX_LISTED_IMAGES}`}
                  </h2>
                </div>
              )}
            </>
          ) : (
            // Blank state
            <div className="bg-cover bg-no-repeat bg-green-200 col-span-10 rounded-lg relative border-r border-white z-20" />
          )}
        </div>
      </div>
      <div className="font-semibold mt-5">{item.attributes?.name}</div>
      <div className="font-light text-greengray text-sm mt-3">{`${item.attributes?.real_estate_ids.length.toString()} propiedades guardadas`}</div>
    </figure>
  );
};

export default CollectionGridItem;
