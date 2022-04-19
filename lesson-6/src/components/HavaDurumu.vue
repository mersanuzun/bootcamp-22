<template>
  <div>
    <input type="text" v-model="lat" />
    <input type="text" v-model="lon" />
    <button @click="randomLatLon">Hava Durumunu Göster</button>
    <hr />

    <div v-if="error">
      <h3>Bir Hata Oluştu</h3>
      <button @click="randomLatLon">Tekrar Dene</button>
    </div>

    <div v-else-if="isLoaded">
      <div>
        <img
          v-if="data.weather[0].main !== 'Clouds'"
          src="../assets/gunesli.png"
        />
        <img v-else src="../assets/bulutlu.jpeg" />
      </div>

      <hr />

      <div>{{ data.weather[0].main }} - {{ data.weather[0].description }}</div>
      <div>
        <label>Hava Sıcaklığı: {{ getTemp | getNumberFilterV2 }} derece</label>
      </div>
      <div>
        <label>Hissedilen Hava Sıcaklığı: {{ getFeelsLike }} derece</label>
      </div>
      <div>Konum: {{ data.name }}</div>
    </div>
    <div v-else>Yükleniyor....</div>
  </div>
</template>

<script>
import axios from "axios";

const getNumber = (number) => {
  return Math.ceil(number - 273.15);
};
function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export default {
  name: "HavaDurumu",
  data() {
    return {
      lat: "41.0052367",
      lon: "28.8720971",
      data: {
        weather: [{ main: "", description: "" }],
        main: {},
      },
      isLoaded: false,
      error: false,
    };
  },
  computed: {
    getTemp() {
      return this.$options.filters.getNumberFilter(this.data.main.temp);
    },
    getFeelsLike() {
      return getNumber(this.data.main.feels_like);
    },
  },
  filters: {
    getNumberFilter(value) {
      return getNumber(value);
    },
  },
  methods: {
    randomLatLon() {
      const latLon = [
        39.456906615021495, 39.456906615021495, 25.761681, -80.191788, 37.0017,
        35.3261, 25.3261, 15.3261,
      ];

      this.lat = latLon[getRandomArbitrary(0, latLon.length)];
      this.lon = latLon[getRandomArbitrary(0, latLon.length)];

      this.lat = Math.random() * 180 - 90;
      this.lon = Math.random() * 360 - 180;

      this.getData();
    },
    async getData() {
      this.error = false;
      this.isLoaded = false;
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=a2e68b405c7095ce44948801db9a9ee7`;
        const response = await axios.get(url);
        this.data = response.data;
        this.isLoaded = true;
      } catch {
        this.error = true;
        this.isLoaded = true;
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped></style>
