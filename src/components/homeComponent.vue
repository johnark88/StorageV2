<template>
  <div class="homeComponent">
    
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
      // Folders hold the files
      folderList: [],
      fileList: [],
    };
  },
  methods: {
    /** Get Storage */ 
    async getBuckets() {
      const requestData = {
        method: 'GET',
        url: "/api/buckets",
      };
      const response = await apiService.customRequest(requestData);
      console.log(response, 'res');
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
<style scoped lang="scss">

</style>
