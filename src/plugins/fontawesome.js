import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFolderOpen, faFileUpload, faFile, faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

library.add(faFolderOpen);
library.add(faFileUpload);
library.add(faFile);
library.add(faEllipsisH);
Vue.component('font-awesome-icon', FontAwesomeIcon);
