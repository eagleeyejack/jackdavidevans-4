export default {
	methods: {
		dragElement(elmnt: any) {
			let pos1 = 0
			let pos2 = 0
			let pos3 = 0
			let pos4 = 0

			if (elmnt.children[0].children[2]) {
				elmnt.children[0].children[2].addEventListener("mousedown", (e: any) => e.stopPropagation())
				elmnt.children[0].children[2].addEventListener("touchstart", (e: any) => e.stopPropagation())
			}

			elmnt.onmousedown = dragMouseDown
			elmnt.addEventListener("touchstart", dragMouseDown)

			function dragMouseDown(e: any) {
				e.stopPropagation()
				e = e || window.event

				if (e.type === "touchstart") {
					pos3 = e.touches[0].clientX
					pos4 = e.touches[0].clientY
				} else {
					e.preventDefault()

					pos3 = e.clientX
					pos4 = e.clientY
				}

				document.onmouseup = closeDragElement
				document.ontouchend = closeDragElement

				document.onmousemove = elementDrag
				document.ontouchmove = elementDrag
			}

			function elementDrag(e: any) {
				e.stopPropagation()
				e = e || window.event

				if (e.type === "touchmove") {
					pos1 = pos3 - e.touches[0].clientX
					pos2 = pos4 - e.touches[0].clientY

					pos3 = e.touches[0].clientX
					pos4 = e.touches[0].clientY
				} else {
					e.preventDefault()
					pos1 = pos3 - e.clientX
					pos2 = pos4 - e.clientY

					pos3 = e.clientX
					pos4 = e.clientY
				}

				elmnt.style.top = elmnt.offsetTop - pos2 + "px"
				elmnt.style.left = elmnt.offsetLeft - pos1 + "px"
				elmnt.style.zIndex = 8
			}

			function closeDragElement() {
				document.onmouseup = null
				document.onmousemove = null
				document.ontouchend = null
				document.ontouchmove = null
				elmnt.style.zIndex = 5
			}
		}
	}
}
