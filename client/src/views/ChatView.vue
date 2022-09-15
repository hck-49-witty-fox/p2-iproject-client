<template>
  <NavBar />
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row d-flex justify-content-center">
        <div>
          <div class="card">
            <div
              class="card-header d-flex justify-content-between align-items-center p-3"
              style="border-top: 4px solid #af0238"
            >
              <h5 class="mb-0">Chat messages</h5>
            </div>
            <div
              class="card-body overflow-auto"
              data-mdb-perfect-scrollbar="true"
              data-mdb-suppress-scroll-x="true"
              style="position: relative; height: 400px"
            >
              <!-- BUBBLE -->
              <div
                v-for="mes in messages"
                :key="mes.id"
                :class="mes.username === name ? 'd-flex flex-row-reverse' : ''"
              >
                <div class="d-flex justify-content-between">
                  <p class="small mb-1">{{ mes.username }}</p>
                </div>
                <div class="d-flex flex-row">
                  <div>
                    <p
                      class="small p-2 ms-3 mb-3 rounded-3"
                      :style="
                        mes.username === name
                          ? 'background-color: #af0238'
                          : 'background-color: #f5f6f7'
                      "
                    >
                      {{ mes.content }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- TUTUP BUBLE -->
            </div>
            <div
              class="card-footer text-muted d-flex justify-content-start align-items-center p-3"
            >
              <div class="input-group mb-0">
                <input
                  v-model="chat"
                  type="text"
                  class="form-control"
                  placeholder="Type message"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-danger"
                  type="button"
                  id="button-addon2"
                  style="padding-top: 0.55rem"
                  @click.prevent="sendMessage"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import db from "../db";
import NavBar from "../components/NavBar.vue";

export default {
  components: { NavBar },
  data() {
    return {
      chat: "",
      name: "",
      messages: [],
    };
  },

  methods: {
    sendMessage() {
      const messagesRef = db.database().ref("messages");
      if (this.chat === "" || this.chat === null) {
        return;
      }
      const message = {
        username: this.name,
        content: this.chat,
      };
      messagesRef.push(message);
    },
  },
  mounted() {
    this.name = localStorage.getItem("username");
    const messagesRef = db.database().ref("messages");
    messagesRef.on("value", (snapshot) => {
      const data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach((key) => {
        messages.push({
          id: key,
          username: data[key].username,
          content: data[key].content,
        });
      });
      this.messages = messages;
    });
  },
};
</script>
