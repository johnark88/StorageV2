<template>
  <div class="home">
    <b-container class="homeContainer">  
      <b-row>
          <b-card title="cardTitle" sub-title="subTitle" img-src="https://picsum.photos/600/300/?image=909"
            img-alt="Image" img-top tag="article" class="folderCard">
            <b-link href="#"> 
              <b-dropdown no-caret variant="link" class="cardDropDown">
                <template slot="button-content">
                  <font-awesome-icon :icon="['fas', 'ellipsis-h']" /><span class="sr-only">Search</span>
                </template>
                <b-dropdown-item>Batman</b-dropdown-item>
                <b-dropdown-item>Robin</b-dropdown-item>
                <b-dropdown-item>Caveman</b-dropdown-item>
              </b-dropdown>
            </b-link>
            <div class="cardLink">
              <b-link href="/files" class="card-link"> View files</b-link>
            </div>
          </b-card>
      </b-row>
    </b-container>
     <homeComponent />
  </div>
</template>
<script>
import homeComponent from '@/components/homeComponent.vue';

export default {
  name: 'home',
  components: {
    homeComponent,
  },
  data() {
    return {
      // cardTitle: 'Batman',
      // subTitle: 'Shared / Private / Due',
      // imgUrl: '',

    };
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">
.homeContainer {
  margin-top: 4em;
}
.folderCard {
  text-align: left;
  // margin: 20px;
  max-width: 20rem;
  max-height: 23em;
}
.card-body {
  padding: 1em;
}
.cardLink{
  float: right;
  text-decoration: none;
}
// Drop down arrow/border box
.cardDropDown {
  color: black; 
  background-color: white; 
  border-color: white; 
}
</style>
