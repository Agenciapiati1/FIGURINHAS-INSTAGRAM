    async function copiarImagem(id) {
      const img = document.getElementById(id);
      const data = await fetch(img.src);
      const blob = await data.blob();
      const item = new ClipboardItem({ [blob.type]: blob });
      navigator.clipboard.write([item]);
      alert('🎉 Figurinha copiada! Abra seu Story e cole!');
    }
