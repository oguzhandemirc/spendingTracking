<template>
  <div>
    <div class="flex justify-start text-2xl pb-5 pt-5">
      <h1>My Card</h1>
    </div>
    <div
      class="credit-card-container w-full"
      @click="flipCard"
    >
      <div
        class="credit-card"
        :class="{ flipped: isFlipped }"
      >
        <!-- Ön Yüz -->
        <div class="card-front flex flex-col justify-between p-4">
          <div class="pt-2 card-holder text-lg font-semibold tracking-wide">
            {{ cardHolder }}
          </div>
          <div />
          <div class="card-type flex justify-center items-center">
            <div class="card-expiration text-sm ">
              <p>{{ formatCardNumber(cardNumber) }}</p>
              <p>  {{ expirationDate }}</p>
            </div>
            <img
              v-if="cardType === 'Visa'"
              src="https://i.ibb.co/Dr4tfDX/visa-logo.webp"
              alt="Visa Logo"
              class=" min-w-20 min-h-20"
            >
            <img
              v-if="cardType === 'MasterCard'"
              src="https://i.ibb.co/vmHXCyN/mastercard-logo.png"
              alt="MasterCard Logo"
              class="min-w-20 min-h-20"
            >
          </div>
        </div>
        <!-- Arka Yüz -->
        <div class="card-back flex flex-col justify-center ">
          <div class="w-full h-12 relative flex items-center justify-end pr-4">
            <div
              class="absolute inset-0 bg-black bg-repeat bg-cover"
              style="background-image: linear-gradient(-180deg, #000 25%, #333 25%, #333 50%, #000 50%, #000 75%, #333 75%);"
            />
            <div class="cvv italic text-white text-sm z-10">
              {{ cvv }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cardNumber: {
    type: String,
    required: true
  },
  cardHolder: {
    type: String,
    required: true
  },
  expirationDate: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true
  }
})
const isFlipped = ref(false)

function flipCard() {
  isFlipped.value = !isFlipped.value
}

function formatCardNumber(number) {
  return number.replace(/(\d{4})(?=\d)/g, '$1 ')
}

const cardType = computed(() => {
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
  const masterCardRegex = /^5[1-5][0-9]{14}$/

  if (visaRegex.test(props.cardNumber)) {
    return 'Visa'
    console.log('Visa')
  } else if (masterCardRegex.test(props.cardNumber)) {
    return 'MasterCard'
    console.log('MasterCard')
  } else {
    return null
  }
})
</script>

  <style scoped>
  .credit-card-container {

    height: 190px;
    perspective: 1000px;
    cursor: pointer;
  }

  .credit-card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .flipped {
    transform: rotateY(180deg);
  }

  .card-front, .card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 12px;
    backface-visibility: hidden;
    background: linear-gradient(45deg, #0073e6, #00aaff);
    color: white;
  }

  .card-back {
    transform: rotateY(180deg);
  }

  .card-type img {
    display: block;
    margin-left: auto;
    width: 48px;
    height: 32px;
  }
  </style>
