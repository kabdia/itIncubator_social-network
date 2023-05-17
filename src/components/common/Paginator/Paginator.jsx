import React, { useState } from 'react'
import style from './Paginator.module.css'
import cn from 'classnames'

let Paginator = (props, {portionSize=10}) => {
    let pagesCount = Math.ceil(props.totalItemsCount/props.pageSize);
    let pages = [];
    for (let i=1;i<=pagesCount;i++){
        pages.push(i)
    }
    
let portionCount=Math.ceil(pagesCount/props.pageSize);
let [portionNumber, setPortionNumber] =useState(1);
let leftPortionNumber = portionNumber * portionSize - 9;
let rightportionPageNumber = portionNumber*portionSize;
    
return <div className={style.usersList}>
        <div className={style.usersList__pagination}>
        <ul className={style.pagination__items}>
            {portionNumber >1 &&
            <button onClick={()=> {setPortionNumber(portionNumber-1)}}>Назад</button>}
            
            { pages
                    .filter(li=> li >=leftPortionNumber && li<= rightportionPageNumber)
                    .map((li) => {
                        
                        return (
                            
                            <span className = {cn({
                                [style.items__selected]:props.currentPage===li
                             },style.pageNumber)}
                             key={li}
                             onClick={(e)=>{
                                props.onPageChanged(li)
                             }}
                             >{li}</span>
                         )
                        
                         
            })}
            {portionCount>portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Далее</button>}
        
                     
            
            </ul>           
        </div>        
</div> 
}


export default Paginator;