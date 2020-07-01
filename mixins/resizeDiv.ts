export default {
	methods: {
		resizeDiv(div: any) {
			const element = document.querySelector(div)
			const resizers = document.querySelectorAll(div + " .resizer")
			const minimumSize = 20
			let originalWidth = 0
			let originalHeight = 0
			let originalX = 0
			let originalY = 0
			let originalMouseX = 0
			let originalMouseY = 0
			for (let i = 0; i < resizers.length; i++) {
				const currentResizer = resizers[i]
				currentResizer.addEventListener("mousedown", function (e: any) {
					e.preventDefault()
					e.stopPropagation()

					originalWidth = parseFloat(getComputedStyle(element, null).getPropertyValue("width").replace("px", ""))
					originalHeight = parseFloat(getComputedStyle(element, null).getPropertyValue("height").replace("px", ""))
					originalX = element.getBoundingClientRect().left
					originalY = element.getBoundingClientRect().top
					originalMouseX = e.pageX
					originalMouseY = e.pageY
					window.addEventListener("mousemove", resize)
					window.addEventListener("mouseup", stopResize)
				})

				// eslint-disable-next-line no-inner-declarations
				function resize(e: any) {
					e.stopPropagation()
					e.target.setAttribute("draggable", false)
					if (currentResizer.classList.contains("bottom-right")) {
						const width = originalWidth + (e.pageX - originalMouseX)
						const height = originalHeight + (e.pageY - originalMouseY)
						if (width > minimumSize) {
							element.style.width = width + "px"
						}
						if (height > minimumSize) {
							element.style.height = height + "px"
						}
					} else if (currentResizer.classList.contains("bottom-left")) {
						const height = originalHeight + (e.pageY - originalMouseY)
						const width = originalWidth - (e.pageX - originalMouseX)
						if (height > minimumSize) {
							element.style.height = height + "px"
						}
						if (width > minimumSize) {
							element.style.width = width + "px"
							element.style.left = originalX + (e.pageX - originalMouseX) + "px"
						}
					} else if (currentResizer.classList.contains("top-right")) {
						const width = originalWidth + (e.pageX - originalMouseX)
						const height = originalHeight - (e.pageY - originalMouseY)
						if (width > minimumSize) {
							element.style.width = width + "px"
						}
						if (height > minimumSize) {
							element.style.height = height + "px"
							element.style.top = originalY + (e.pageY - originalMouseY) + "px"
						}
					} else {
						const width = originalWidth - (e.pageX - originalMouseX)
						const height = originalHeight - (e.pageY - originalMouseY)
						if (width > minimumSize) {
							element.style.width = width + "px"
							element.style.left = originalX + (e.pageX - originalMouseX) + "px"
						}
						if (height > minimumSize) {
							element.style.height = height + "px"
							element.style.top = originalY + (e.pageY - originalMouseY) + "px"
						}
					}
				}

				// eslint-disable-next-line no-inner-declarations
				function stopResize() {
					element.setAttribute("draggable", true)
					window.removeEventListener("mousemove", resize)
				}
			}
		}
	}
}
