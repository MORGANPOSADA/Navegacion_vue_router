<template>
  <div>Ofertar espacio
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
                    text: "Renta tu espacio",
                    href: "#",
                    to: "renta-tu-espacio",
                },
                {
                    text: "Informacion de espacio",
                    href: "#",
                    to: "informacion-de-espacio",
                },
                {
                    text: "Ofertar espacio",
                    href: "#",
                },
            ],
        };
  }

}
</script>

<style>

</style>