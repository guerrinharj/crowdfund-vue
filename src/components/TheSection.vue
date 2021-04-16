<template>

<div class="the-section">
  <title-section
     :logo="logos"
     :title="titles"
     :shortbio="shortbios"> 
    </title-section>
</div>

<div class="the-section">
    <campaign-section
    :currentmoney="money[0]"
    :totalmoney="money[1]"
    :backers="backers"
    :daysleft="daysLeft"
    >
    </campaign-section>
</div>

<div class="the-section">
    <about-section>

    </about-section>
</div>
    
</template>

<script>

  import TitleSection from './TitleSection.vue'
  import CampaignSection from './CampaignSection.vue'
  import AboutSection from './AboutSection.vue'


export default {
  components: {
    TitleSection,
    CampaignSection,
    AboutSection
  },
  inject: ['logos', 'titles', 'shortbios', 'money', 'backers', 'daysLeft', 'biog', 'rewards']
}

</script>




<style scoped>

 .the-section {
        background-color: white;
        border-radius: 20px;
        display: flex;
        width: 100%;
        margin: 7vh auto;
        position: relative
 }


</style>