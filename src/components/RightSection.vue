<template>
  <div class="right-section">
    <div class="profile-bottom-section">
      <ProfileSection />
      <ProfileTabs />
      <ProgressCircleSection />
    </div>
    <div class="detail-section-main">
      <div class="detail-section">
        <div class="section-title">Bank Detail</div>
        <DetailsSection />
        <AlertMassage />
      </div>
    </div>
  </div>
</template>
<script>
import ProgressCircleSection from '../components/ProgressCircleSection.vue'
import ProfileSection from '../components/ProfileSection.vue'
import ProfileTabs from '../components/ProfileTabs.vue'
import DetailsSection from '../components/DetailsSection.vue'
import AlertMassage from '../components/AlertMassage.vue'
export default {
  name: 'RightSection',
  components: {
    ProfileSection,
    ProfileTabs,
    ProgressCircleSection,
    DetailsSection,
    AlertMassage,
  },
}
</script>
<style>
.profile-bottom-section {
  max-width: 400px;
  background-color: #feee00;
  padding: 70px 0 47px 26px;
  border-top-left-radius: 12px;
  display: inline-block;
}
.profile-bottom-img {
  max-width: 192px;
  margin: 0 auto;
  position: relative;
}
.profile-bottom {
  padding-right: 26px;
}
.profile-img-class {
  border-radius: 50%;
  max-width: 192px;
  max-height: 192px;
}
.comeraimg {
  background: #ffffff;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0.94;
  cursor: pointer;
}
.profile-bottom-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.profile-bottom-name .name {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
}
.profile-bottom-name .city-name {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-top: 10px;
  color: #000000;
}
.profile-tabs {
  margin-top: 60px;
  padding-left: 20px;
}
.tab {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px 0px 23px 46px;
}
.tab-name {
  margin-left: 17px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  color: #000;
}
.tab.active {
  background-color: #f3f5fd;
  border-radius: 12px 0px 0px 12px;
}

.tab.active::before {
  content: '';
  height: 25px;
  width: 25px;
  background: #f3f5fd;
  border-radius: 25px;
  position: absolute;
  right: -18px;
  top: -12px;
}

.tab.active::after {
  content: '';
  height: 25px;
  width: 25px;
  background: #f3f5fd;
  border-radius: 25px;
  position: absolute;
  right: -18px;
  bottom: -12px;
}

.complete-profile {
  background-color: #f3f5fd;
  border-radius: 10px;
  padding: 12px 18px;
  margin-right: 26px;
  margin-top: 60px;
}

.complete-profile-title {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000;
  line-height: 20px;
}

.progress-bar-text {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #000;
}
.progress-bar {
  margin-top: 8px;
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.right-section {
  display: grid;
  grid-template-columns: 400px 1fr;
}

.detail-section {
  position: relative;
}

.detail-section-main {
  display: block;
  background: #f3f5fd;
  padding: 50px 35px 0 50px;
}

.section-title {
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #393941;
  margin-bottom: 40px;
  text-transform: capitalize;
}

.form-section {
  max-width: 700px;
}

.input-fields-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 60px;
  row-gap: 15px;
}

.input-group .label {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #393941;
  display: block;
  margin-bottom: 10px;
}

.input-group .input-text,
.control select {
  border: none;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 15px 18px 15px 18px;
  height: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  width: 100%;
  cursor: pointer;
}

input:focus-visible,
.control select {
  outline: none;
}

.form-action .save-change {
  background: #feee00;
  border-radius: 5px;
  border: none;
  padding: 18px 55px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #3f4553;
  cursor: pointer;
  margin-top: 40px;
  transition: 0.4s all;
  box-shadow: none;
}

.form-action .save-change:hover {
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
}

.massage-alert {
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  background: #2daf33;
  border-radius: 10px;
  padding: 11px 18px 11px 23px;
  color: #fff;
  position: absolute;
  top: -25px;
  right: 0;
}

.checkmark-icon {
  margin-right: 20px;
}
</style>
