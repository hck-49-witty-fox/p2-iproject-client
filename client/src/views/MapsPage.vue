<template>
    <div class="justify-between items-center text-white rounded-lg p-5 m-10 mt-5 mb-5">
        <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="{lat: lat, lng: lng}" :zoom="15">
            <Marker :options="{ position: {lat: lat, lng: lng}, title: `Hi, ${username}` }" />
            <MarkerCluster>
                <Marker v-for="(data, i) in nearby" :options="{ position: data.location, title: `${data.name}, ${data.rating}`, label:`${data.id}` }" :key="i" />
            </MarkerCluster>
        </GoogleMap>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg m-5">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                #
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Address
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Rating
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableReusable
                        v-for="near in nearby"
                        :key="near.id"
                        :data="near"
                        :idx="near.id"
                        />
                    </tbody>
                </table>
            </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useIProjStore } from '../stores/IProj';
import { GoogleMap, Marker, MarkerCluster } from "vue3-google-map";
import TableReusable from '../components/TableReusable.vue';

export default {
    components: {
    GoogleMap,
    Marker,
    MarkerCluster,
    TableReusable
},
    data() {
        return {
            lat: '',
            lng: '',
            apiKey: 'AIzaSyCMZYZzgkzXRe_Uq85KwgnBDZ8aeMG_Sqg'
        }
    },
    computed: {
        ...mapState(useIProjStore, ['nearby', 'username'])
    },
    methods: {
        ...mapActions(useIProjStore, ['fetchDataNearby'])
    },
    async created(){
    await this.$getLocation()
      .then((coordinates) => {
        console.log(coordinates);
        this.lat = coordinates.lat
        this.lng = coordinates.lng
        this.fetchDataNearby(coordinates.lat, coordinates.lng)
      })
      .catch((error) => {
        console.log(error);
      });
    }
    
}
</script>