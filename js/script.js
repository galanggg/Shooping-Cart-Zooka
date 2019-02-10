// $("#showModal").click(function() {
//   $(".modal").addClass("is-active");
// });

// $("#modal-close").click(function() {
//    $(".modal").removeClass("is-active");
// });

// document.addEventListener('DOMContentLoaded', function () {

//   // Modals

//   var rootEl = document.documentElement;
//   var $modals = getAll('.modal');
//   var $modalButtons = getAll('.modal-button');
//   var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

//   if ($modalButtons.length > 0) {
//     $modalButtons.forEach(function ($el) {
//       $el.addEventListener('click', function () {
//         var target = $el.dataset.target;
//         var $target = document.getElementById(target);
//         rootEl.classList.add('is-clipped');
//         $target.classList.add('is-active');
//       });
//     });
//   }

//   if ($modalCloses.length > 0) {
//     $modalCloses.forEach(function ($el) {
//       $el.addEventListener('click', function () {
//         closeModals();
//       });
//     });
//   }

//   document.addEventListener('keydown', function (event) {
//     var e = event || window.event;
//     if (e.keyCode === 27) {
//       closeModals();
//     }
//   });

//   function closeModals() {
//     rootEl.classList.remove('is-clipped');
//     $modals.forEach(function ($el) {
//       $el.classList.remove('is-active');
//     });
//   }

//   // Functions

//   function getAll(selector) {
//     return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
//   }

// });

class BulmaModal {
	constructor(selector) {
		this.elem = document.querySelector(selector)
		this.close_data()
	}

	show() {
		this.elem.classList.toggle('is-active')
		this.on_show()
	}

	close() {
		this.elem.classList.toggle('is-active')
		this.on_close()
	}

	close_data() {
		var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
		var that = this
		modalClose.forEach(function(e) {
			e.addEventListener("click", function() {

				that.elem.classList.toggle('is-active')

				var event = new Event('modal:close')

				that.elem.dispatchEvent(event);
			})
		})
	}

	on_show() {
		var event = new Event('modal:show')

		this.elem.dispatchEvent(event);
	}

	on_close() {
		var event = new Event('modal:close')

		this.elem.dispatchEvent(event);
	}

	addEventListener(event, callback) {
		this.elem.addEventListener(event, callback)
	}
}

var btn = document.querySelector("#btn")
var mdl = new BulmaModal("#myModal")

btn.addEventListener("click", function () {
	mdl.show()
})

mdl.addEventListener('modal:show', function() {
	console.log("opened")
})

mdl.addEventListener("modal:close", function() {
	console.log("closed")
})