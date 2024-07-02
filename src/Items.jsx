import SingleItem from "./SingleItem"

const Items = ({items, removeItem}) => {
  return (
    items.length > 0 ?
    <div className="items">
        {items.map(itemsMap => {
            return <SingleItem 
            key={itemsMap.id}
            itemsMap={itemsMap}
            removeItem={removeItem} />
        })}
    </div> : 'Add some item here'
  )
}

export default Items