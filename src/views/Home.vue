<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div v-else class="row">

      <HomeVue
              :rates="currency.rates"
      />

      <HomeCurrency
              :rates="currency.rates"
              :date="currency.date"
      />

    </div>
  </div>
</template>

<script>
  import HomeVue from '@/components/HomeVue'
  import HomeCurrency from '@/components/HomeCurrency'
  export default {
    name: 'home',
    data: () => ({
      loading: true,
      currency: null
    }),
    async mounted() {
      this.currency = await this.$store.dispatch('fetchCurrency');
      console.log(this.currency);
      this.loading = false
    },
    methods : {
      async refresh() {
        this.loading= true;
        this.currency = await this.$store.dispatch('fetchCurrency');
        this.loading =false
      }
    },
    components: {
      HomeVue, HomeCurrency
    }
  }
</script>
