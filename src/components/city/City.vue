<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet @change="handleLetterChange" :cities="cities"></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from './components/CityHeader'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'

    import axios from 'axios'

    export default {
        name: "City",
        data() {
            return {
                cities: {},
                hotCities: [],
                letter: ""
            }
        },
        components: {
            CityHeader,
            CityList,
            CityAlphabet,
            CitySearch
        },
        mounted () {
            this.getCityInfo();
        },

        methods: {
            getCityInfo(){
                axios.get('/index.php?r=api/common/get-city')
                    .then(this.getCityInfoSucc)
            },

            getCityInfoSucc(res){
                if(res.data.result && res.data.result.data){
                    const data = res.data.result.data;
                    this.cities = data.cities;
                    this.hotCities = data.hotCities
                }
            },

            handleLetterChange(letter){
                this.letter = letter
            }
        }
    }
</script>

<style scoped lang="stylus">

</style>