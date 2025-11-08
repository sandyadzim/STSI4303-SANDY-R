<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title>Prakiraan Cuaca Jakarta</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Prakiraan Cuaca Jakarta</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Loading State -->
      <div v-if="state.loading" class="loading-container">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Memuat data cuaca...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="state.error" class="error-container">
        <ion-icon
          :icon="alertCircleOutline"
          color="danger"
          class="error-icon"
        ></ion-icon>
        <p class="error-text">{{ state.error }}</p>
        <ion-button @click="fetchWeatherData" fill="outline">
          <ion-icon slot="start" :icon="refreshOutline"></ion-icon>
          Coba Lagi
        </ion-button>
      </div>

      <!-- Weather Data -->
      <div v-else class="weather-container">
        <!-- Location Info -->
        <div class="location-card">
          <ion-card>
            <ion-card-content>
              <div class="location-info">
                <ion-icon :icon="locationOutline" color="primary"></ion-icon>
                <div>
                  <h2>Jakarta</h2>
                  <p>Indonesia</p>
                </div>
              </div>
              <ion-button @click="fetchWeatherData" fill="clear" size="small">
                <ion-icon slot="icon-only" :icon="refreshOutline"></ion-icon>
              </ion-button>
            </ion-card-content>
          </ion-card>
        </div>

        <!-- Weather List -->
        <div class="weather-list">
          <div
            v-for="(item, index) in state.weatherData"
            :key="index"
            class="weather-item"
          >
            <ion-card>
              <ion-card-content>
                <div class="weather-info">
                  <div class="time-info">
                    <div class="date">{{ item.formattedDate }}</div>
                    <div class="time">{{ item.formattedTime }}</div>
                  </div>
                  <div class="temp-info">
                    <ion-icon
                      :icon="thermometerOutline"
                      :color="getTemperatureColor(item.temperature)"
                      class="temp-icon"
                    ></ion-icon>
                    <div class="temperature">{{ item.temperature }}°C</div>
                  </div>
                </div>
              </ion-card-content>
            </ion-card>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonSpinner,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import {
  thermometerOutline,
  locationOutline,
  refreshOutline,
  alertCircleOutline,
} from "ionicons/icons";
import weatherService from "@/services/weatherService";
import type { WeatherItem } from "@/types/weather";

const state = reactive({
  weatherData: [] as WeatherItem[],
  loading: true,
  error: null as string | null,
});

const fetchWeatherData = async () => {
  state.loading = true;
  state.error = null;

  try {
    const data = await weatherService.getJakartaWeather();
    state.weatherData = data;
  } catch (err) {
    state.error = "Gagal memuat data cuaca. Silakan coba lagi.";
    console.error("Error:", err);
  } finally {
    state.loading = false;
  }
};

const getTemperatureColor = (temp: number): string => {
  if (temp >= 30) return "danger";
  if (temp >= 25) return "warning";
  if (temp >= 20) return "success";
  return "primary";
};

onMounted(() => {
  fetchWeatherData();
});
</script>

<style scoped>
.loading-container,
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  padding: 20px;
}

.loading-container p {
  margin-top: 16px;
  color: var(--ion-color-medium);
  font-size: 14px;
}

.error-container {
  text-align: center;
}

.error-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.error-text {
  color: var(--ion-color-danger);
  font-size: 16px;
  margin-bottom: 24px;
}

.weather-container {
  padding: 16px;
  padding-bottom: 32px;
}

.location-card {
  margin-bottom: 16px;
}

.location-card ion-card {
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.location-card ion-card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.location-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.location-info ion-icon {
  font-size: 32px;
}

.location-info h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--ion-color-dark);
}

.location-info p {
  margin: 4px 0 0 0;
  font-size: 14px;
  color: var(--ion-color-medium);
}

.weather-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.weather-item ion-card {
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.weather-item ion-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.weather-item ion-card-content {
  padding: 16px;
}

.weather-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.date {
  font-size: 14px;
  color: var(--ion-color-medium);
  font-weight: 500;
}

.time {
  font-size: 18px;
  font-weight: 600;
  color: var(--ion-color-dark);
}

.temp-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.temp-icon {
  font-size: 28px;
}

.temperature {
  font-size: 28px;
  font-weight: 700;
  color: var(--ion-color-dark);
}

/* Responsive Design */
@media (min-width: 768px) {
  .weather-container {
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
