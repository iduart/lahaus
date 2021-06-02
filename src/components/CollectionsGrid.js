import { useEffect, useState } from "react";

const CollectionsGrid = () => {
  const [collections, setCollections] = useState([]);
  const [collectionMeta, setCollectionMeta] = useState([]);

  console.log(collections);

  const fetchCollections = async () => {
    const response = await fetch("./real_estates.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const jsonData = await response.json();
    setCollections(jsonData.data);
    setCollectionMeta(jsonData.included);
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div className="px-6 pb-28 lg:w-4/5 md:w-full md:m-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-16">
        {collections.map((item) => (
          <div>
            <div className="text-center relative h-48 rounded-lg bg-ih-md-blue">
              <div className="grid grid-cols-4">
                <div>
                  <img
                    src="https://lahaus-staging.imgix.net/uploads/real_estate_attachment/picture/2067362/apartamento_en_venta_en_cedro_golf_usaquen_de_48m_gallery_20055e03588494bb06ea.jpg"
                    alt="galley"
                  />
                </div>
                <div>
                  <img
                    src="https://lahaus-staging.imgix.net/uploads/real_estate_attachment/picture/2067362/apartamento_en_venta_en_cedro_golf_usaquen_de_48m_gallery_20055e03588494bb06ea.jpg"
                    alt="galley"
                  />
                </div>
                <div>
                  <img
                    src="https://lahaus-staging.imgix.net/uploads/real_estate_attachment/picture/2067362/apartamento_en_venta_en_cedro_golf_usaquen_de_48m_gallery_20055e03588494bb06ea.jpg"
                    alt="galley"
                  />
                </div>
              </div>
            </div>
            <div className="font-semibold mt-5">{item.attributes?.name}</div>
            <div className="font-light text-greengray text-sm mt-3">{`${item.attributes?.real_estate_ids.length.toString()} propiedades guardadas`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsGrid;
