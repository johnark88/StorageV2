<template>
  <div class="homeComponent">
    <b-container class="homeContainer">  
      <b-row>
        <div v-for="(bucket, index) in bucketList" :key="index" class="">
          <b-card :title="bucket.name" :sub-title="subTitle" img-src="https://picsum.photos/600/300/?image=909"
            img-alt="Image" img-top tag="article" class="folderCard">
            <b-link href="#"> 
              <b-dropdown no-caret variant="link" class="cardDropDown">
                <template slot="button-content">
                  <font-awesome-icon :icon="['fas', 'ellipsis-h']" /><span class="sr-only">Search</span>
                </template>
                <b-dropdown-item>Share</b-dropdown-item>
                <b-dropdown-item>Archive</b-dropdown-item>
                <b-dropdown-item>Delete</b-dropdown-item>
              </b-dropdown>
            </b-link>
            <div class="cardLink">
              <b-link href="/files" class="card-link"> View files</b-link>
            </div>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import apiService from '../services/apiService';

export default {
  name: 'homeComponent',
  data() {
    return {
      // Bucket holdes the folders
      storageBucket: '',
      bucketList: [],
      // Folders hold the files
      folderList: [],
      fileList: [],
      cardTitle: 'Client',
      subTitle: 'Shared / Private / Due',
      // imgUrl: '',
    };
  },
  mounted() {
    this.getBuckets();
  },
  methods: {
    /** Get Storage */ 
    async getBuckets() {
      const requestData = {
        method: 'GET',
        url: "/api/buckets",
      };
      const response = await apiService.customRequest(requestData);
      console.log(response.data, 'res');
      this.bucketList = response.data;
    },
    /** Get folders - need bucket name */ 
    async getBucketObject(storageName) {
      this.storageBucket = storageName;
      const requestData = {
        method: 'GET',
        url: `/api/objects/${storageName}`,
      };
      const response = await apiService.customRequest(requestData);
      this.folderList = response.data;
      console.log(this.folderList);
    },
    /** Get files - need bucket name & folder name */ 
    async getFileObject(folderName) {
      this.selectedFolder = folderName; 
      const requestData = {
        method: 'GET',
        url: `/api/objects/files/${this.storageBucket}/${folderName}`,
      }
      const response = await apiService.customRequest(requestData);
      this.fileList = response.data;
    },
  },
};
</script>
