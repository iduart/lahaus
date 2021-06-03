import { useEffect, useState } from "react";
import CollectionGridItem from "./CollectionGridItem";
import { Plus } from "../icons";

const CollectionsGrid = () => {
  const [collections, setCollections] = useState([]);
  const [collectionMeta, setCollectionMeta] = useState([]);

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
    <div className="px-6 pb-28 lg:w-5/6 md:w-full md:m-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-16">
        {collections.map((item, index) => (
          <CollectionGridItem
            key={index}
            item={item}
            collectionsMeta={collectionMeta}
          />
        ))}
        <div className="text-center relative h-48 rounded-lg bg-ih-md-blue flex justify-center items-center">
          <Plus />
        </div>
      </div>
    </div>
  );
};

export default CollectionsGrid;
