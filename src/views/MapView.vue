<template>
  <div class="container mx-auto h-screen">
    <div ref="map" class="w-full h-full z-40" @click="openModal" />
  </div>
  <div
    :class="modal ? 'block' : 'hidden'"
    class="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-y-auto"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="bg-white rounded shadow p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Додати маркер</h2>
        <div>
          <input
            v-model="nameMarker"
            class="w-full border rounded px-2 py-1 text-black mb-1"
            type="text"
            placeholder="Назва маркера"
          />
          <input
            v-model="lat"
            class="w-full border rounded px-2 py-1 text-black mb-1"
            type="text"
            placeholder="Широта"
          />
          <input
            v-model="lng"
            class="w-full border rounded px-2 py-1 text-black mb-1"
            type="text"
            placeholder="Довгота"
          />
        </div>
        <button
          @click="addMarker"
          class="bg-green-700 text-white rounded px-4 py-2"
        >
          Додати
        </button>
        <button
          @click="closeModal"
          class="bg-red-500 text-white rounded px-4 py-2"
        >
          Закрити
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
export default {
  name: "MapView",
  data() {
    return {
      map: null,
      modal: false,
      lat: null,
      lng: null,
      nameMarker: null,
    };
  },
  mounted() {
    this.map = L.map(this.$refs.map).setView([50.4504, 30.5234], 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    }).addTo(this.map);
  },
  methods: {
    openModal(event) {
      this.modal = true;
      const { lat, lng } = this.map.mouseEventToLatLng(event);
      this.lng = lng;
      this.lat = lat;
    },
    closeModal() {
      this.lng = null;
      this.lat = null;
      this.nameMarker = null;
      this.modal = false;
    },
    addMarker() {
      const marker = L.marker([this.lat, this.lng]).addTo(this.map);
      marker.bindTooltip(this.nameMarker);
      this.lng = null;
      this.lat = null;
      this.nameMarker = null;
      this.modal = false;
    },
  },
  beforeUnmount() {
    this.map.remove();
  },
};
</script>
<style lang="scss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
