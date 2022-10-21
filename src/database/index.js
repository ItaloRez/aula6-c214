import mongoose from "mongoose";

export default {
  connect() {
    const uri = `mongodb+srv://root:root@cluster0.u199ygy.mongodb.net/?retryWrites=true&w=majority`;
    return mongoose.connect(uri, {
      // Configurações de conexão
    });
  },
  disconnect() {
    return mongoose.disconnect();
  },
};
