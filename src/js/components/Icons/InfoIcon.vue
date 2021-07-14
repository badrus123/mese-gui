<template>
    <svg :width="width || 26" :height="height || 25" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16.5C3.58172 16.5 0 12.9183 0 8.5C0 4.08172 3.58172 0.5 8 0.5C12.4183 0.5 16 4.08172 16 8.5C15.9952 12.9163 12.4163 16.4952 8 16.5ZM1.6 8.6376C1.63785 12.1586 4.51289 14.9876 8.03403 14.9688C11.5552 14.9498 14.3996 12.09 14.3996 8.5688C14.3996 5.0476 11.5552 2.18782 8.03403 2.1688C4.51289 2.14997 1.63785 4.97901 1.6 8.5V8.6376ZM9.6 12.5H7.2V9.3H6.4V7.7H8.8V10.9H9.6V12.5ZM8.8 6.1H7.2V4.5H8.8V6.1Z" fill="white"/>
    </svg>
</template>

<script>
export default {
    props: ['color','width','height']
}
</script>

<style lang="scss">

</style>
