<template>
    <button class="btn btn-icon btn-google mx-1" id="buttonDiv">
        <i class="fab fa-google fa-fw fa-sm"></i>
    </button>
</template>

<script>
    import { mapActions, mapState } from 'pinia';
    import { useSessionStore } from '../stores/sessionStore';

    export default {
        methods: {
            ...mapActions(useSessionStore, ['handleCredentialResponse' ]),

            // GOOGLE SIGN IN
            mounted(){
                const cb = this.handleCredentialResponse
                window.onload = function () {
                    google.accounts.id.initialize({
                        client_id: "122934776884-msf8kh9unl5t3f99bkeav7gvm8l0lgii.apps.googleusercontent.com",
                        callback: cb
                    });
                    google.accounts.id.renderButton(
                        document.getElementById("buttonDiv")
                    );
                    google.accounts.id.prompt(); // also display the One Tap dialog
                }
            },
        }
    };
</script>