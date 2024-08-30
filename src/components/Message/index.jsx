import { useEffect } from "react"

const Message = ({ show, activeMessage, children, timeOut }) => {
  useEffect(() => {
		if (show) {
			toggleMessage()
		}
  })

	const toggleMessage = () => {
		setTimeout(() => {
			activeMessage(false)
		}, timeOut)
	}

	return (
		<>
			{
				show ? 
					<>
						<div
							className="
								fixed bottom-10 right-15
								sm:bottom-10 sm:right-10 
								bg-green-500 p-4 shadow-2xl rounded-lg 
								flex flex-col item-center gap-8"
							>
							<div className="text-slate-50 text-lg">
								{ children }
							</div>
						</div>
					</>
				: <></>
			}
		</>
	)
}

export default Message