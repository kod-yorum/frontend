<template>
  <div class="modal" v-if="isModalVisible">
    <div class="modal__overlay" @click="setModalVisibility(false)"></div>
    <div class="modal__container"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Modal',
  computed: {
    ...mapState('global',
      ['isModalVisible']
    )
  },
  methods: {
    ...mapActions({
      setModalVisibility: 'global/setModalVisibility'
    })
  }
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  &__overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    position: absolute;
  }

  &__container {
    width: 600px;
    height: 300px;
    background: #fff;
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
    border-radius: 5px;
    z-index: 99;
  }
}
</style>
