<template>
  <div>Detales de espacio
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data(){
    return {
            items: [
                {
                    text: "Inicio",
                    href: "#",
                    to: "inicio",
                },
                {
                    text: "Rentar espacio",
                    href: "#",
                    to: "rentar-espacio",
                },
                {
                    text: "Catalogo de espacios",
                    href: "#",
                    to: "catalogo-de-espacios",
                },
                {
                    text: "Detalles de espacio",
                    href: "#",
                },
                
            ],
        };
  }

};
</script>

<style>

</style>