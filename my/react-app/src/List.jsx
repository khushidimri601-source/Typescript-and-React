function List(props){
  const category=props.category
   const itemList=props.items;
   //const lowCal=fruits.filter(fruit=>fruit.calories>60)
  const listItem= itemList.map(item=><li key={item.id}>{item.name}:<b>{item.calories}</b></li>)
  return (<><h3 className="list-category">{category}</h3><ol className="list-item">{listItem}</ol>
  </>)
}
List.propType={
  category:propType.string,
  item:propType.arrayOf(propType.shape({
    id:propType.number,
    name:propType.string,
    calories:propType.number
  }))
}
export default List