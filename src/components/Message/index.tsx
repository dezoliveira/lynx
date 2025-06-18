import { useEffect } from "react"

interface MessageProps {
	show: boolean
	activeMessage: (active: boolean) => void
	children: React.ReactNode
	timeOut: number
	type: string
}

export default function Message({ show, activeMessage, children, timeOut = 3000, type }: MessageProps) {
  useEffect(() => {
		if (show) {
			const timer = setTimeout(() => {
				activeMessage(false)
			}, timeOut)
			
			return () => clearTimeout(timer)
		}
  }, [show, timeOut, activeMessage])

	const toggleMessage = () => {
		setTimeout(() => {
			activeMessage(false)
		}, timeOut)
	}

	const bgColor = type === "success" ? "bg-green-500" : "bg-red-500"

	// if (!show) return null

	return (
			show && <div
				className={`
					fixed bottom-10 right-15
					sm:bottom-10 sm:right-10 
					p-4 shadow-2xl rounded-lg 
					flex flex-col item-center gap-8
					${bgColor}`
				}
				>
				<div className="text-slate-50 text-lg">
					{ children }
				</div>
			</div>
	)
}