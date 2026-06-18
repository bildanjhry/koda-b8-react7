import { useState, useRef } from "react"
import { IoMdClose } from "react-icons/io";

export default function Days({children}){
	const [expand, setExpand] = useState(false)
	const li = useRef()

	function expandList(){
		if(!expand) {
			setExpand(true)
			li.current.className = "h-fit w-full border-b border-(--border)"
		}
	}

	function closeList(){
		li.current.className = "h-30 w-full border-b border-(--border)"
		setExpand(false)
	}

	return(
		<li 
			ref={li}
			className="h-30 w-ful border-b border-(--border)">
			<button 
						type="button"
						onClick={(e) => {expandList(e)}}
						className="cursor-pointer h-full w-full flex 
						flex-col justify-start pl-7 pt-4 pb-7 items-start">
							<div className="flex items-center w-full pr-5 justify-between">
								{children}
								{expand &&
									<div
									onClick={() => {closeList()}}
									className="relative w-fit h-fit z-2 top-2">
										<IoMdClose size={30}/>
									</div>
								}
							</div>
							{ expand && 
							<div className="flex flex-col gap-2 h-fit">
								<p className="relative top-[-2px]">June, 14 2026 - 10:10am</p>
								<ul className="flex flex-col mt-1 gap-[1px] text-[13px]">
									<li className="flex items-center gap-2">
										<input type="checkbox" id="todo[1]" name="todo[1]" className="peer accent-(--active-bg) relative "/>
										<label htmlFor="todo[1]" className="peer-checked:line-through peer-checked:text-(--text-active)">5km run</label>
									</li>
									<li className="flex items-center gap-2">
										<input type="checkbox" id="todo[2]" className="peer accent-(--active-bg) relative"/>
										<label htmlFor="todo[2]" className="peer-checked:line-through peer-checked:text-(--text-active)">Read 10 Pages</label>
									</li>
									<li className="flex items-center gap-2">
										<input type="checkbox" id="todo[3]" className="peer accent-(--active-bg) relative"/>
										<label htmlFor="todo[3]" className="peer-checked:line-through peer-checked:text-(--text-active)">Walk the Cat</label>
									</li>   
									<li className="flex items-center gap-2">
										<input type="checkbox" id="todo[4]" className="peer accent-(--active-bg) relative"/>
										<label htmlFor="todo[4]" className="peer-checked:line-through peer-checked:text-(--text-active)">Get Groceries</label>
									</li>     
									<li className="flex items-center gap-2">
										<input type="checkbox" id="todo[5]" className="peer accent-(--active-bg) relative"/>
										<label htmlFor="todo[5]" className="peer-checked:line-through peer-checked:text-(--text-active)">Coding?</label>
									</li>               
								</ul>
								<div className="mt-4">
									<input
									className="active:outline-0"
									placeholder="Add new task.." 
									type="text" />
								</div>
							</div>
							}
				</button>
		</li>		
	)
}