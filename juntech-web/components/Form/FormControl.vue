<template>
  <div class="inq_item" :style="{ width: widthPercent + '%' }">
    <VeePro v-slot="v" :rules="rules">
      <label :for="label"
        >{{ label }}
        <span class="error_text">{{ v.errors[0] }}</span>
      </label>
      <template v-if="type === 'textarea'">
        <textarea
          cols="30"
          rows="10"
          class="form_control"
          :id="label"
          :value="value"
          @input="changeValue"
          :disabled="disabled"
        ></textarea>
      </template>
      <template v-else-if="type === 'select'">
        <select
          class="form_control"
          :id="label"
          :value="value"
          @input="changeValue"
          :disabled="disabled"
        >
          <slot></slot>
        </select>
      </template>
      <template v-else>
        <input
          type="text"
          class="form_control"
          :id="label"
          :value="value"
          @input="changeValue"
          :disabled="disabled"
        />
      </template>
    </VeePro>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    value: String,
    disabled: Boolean,
    label: String,
    errorMessage: String,
    rules: String,
    type: String,
    widthPercent: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    changeValue(value) {
      this.$emit('input', value.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.inq_item {
  display: flex;
  flex-flow: column;
  label {
    display: block;
    padding: 8px 0 10px;
    font-weight: 400;
    .error_text {
      color: #f44336;
      padding-left: 10px;
      font-size: 13px;
    }
  }
  textarea {
    resize: none;
  }
      @media (max-width: 640px) {
      width: 100% !important;
      padding: 0 !important;
    }
}
</style>