import Vue from "vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faArrowUp, faSearch, faSignOutAlt, faCaretDown, faCaretUp, faChevronDown, faChevronUp, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faHome, faArrowUp, faSearch, faSignOutAlt, faCaretDown, faCaretUp, faChevronDown, faChevronUp, faChevronLeft, faChevronRight])

Vue.component('font-awesome-icon', FontAwesomeIcon)
