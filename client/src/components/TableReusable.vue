<template>
    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{idx}}
        </th>
        <td class="py-4 px-6">
            {{data.name}}
        </td>
        <td class="py-4 px-6">
            {{data.address}}
        </td>
        <td class="py-4 px-6">
            {{data.rating}}
        </td>
    </tr>
</template>

<script>
    export default {
        props: ["data", "idx"],
    }
</script>