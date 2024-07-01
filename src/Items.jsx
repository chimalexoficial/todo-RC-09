import SingleItem from "./SingleItem"

const Items = ({items, removeItem}) => {
  return (
    <div className="items">
        {items.map(itemsMap => {
            return <SingleItem 
            key={itemsMap.id}
            itemsMap={itemsMap}
            removeItem={removeItem} />
        })}
    </div>
  )
}

export default Items