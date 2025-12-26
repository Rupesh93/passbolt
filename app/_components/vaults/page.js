


"use client";

import { useEffect, useState } from "react";
import CreateDataForm from "../createDataForm/page";
import ShowDataList from "../showDataList/page";

const STORAGE_KEY = process.env.NEXT_PUBLIC_STORAGE_KEY;

const Valuts = () => {
  const [cryptoKey, setCryptoKey] = useState(null);
  const [allStoredData, setAllStoredData] = useState([]);

  function bufferToBase64(buffer) {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
  }

  function base64ToBuffer(base64) {
    return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
  }

  async function generateAndStoreKey() {
    const key = await crypto.subtle.generateKey(
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );

    const rawKey = await crypto.subtle.exportKey("raw", key);
    localStorage.setItem("vault-key", bufferToBase64(rawKey));

    setCryptoKey(key);
    return key;
  }

  async function getKey() {
    const storedKey = localStorage.getItem("vault-key");
    if (!storedKey) return generateAndStoreKey();

    const rawKey = base64ToBuffer(storedKey);
    const key = await crypto.subtle.importKey(
      "raw",
      rawKey,
      { name: "AES-GCM" },
      true,
      ["encrypt", "decrypt"]
    );

    setCryptoKey(key);
    return key;
  }

  async function encryptAndSave(data, key) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encoded = new TextEncoder().encode(JSON.stringify(data));

    const ciphertext = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      encoded
    );

    const payload = {
      iv: bufferToBase64(iv),
      ciphertext: bufferToBase64(ciphertext)
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  async function loadAndDecrypt(key) {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const { iv, ciphertext } = JSON.parse(stored);

    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: base64ToBuffer(iv) },
      key,
      base64ToBuffer(ciphertext)
    );

    return JSON.parse(new TextDecoder().decode(decrypted));
  }

  async function addData(formData) {
    const updated = [...allStoredData, {...formData,id:crypto.randomUUID() }];
    await encryptAndSave(updated, cryptoKey);
    setAllStoredData(updated);
  }


  async function  deleteData(id) {
    const updated = allStoredData.filter(vaultItem=>vaultItem.id !==id)
    await encryptAndSave(updated, cryptoKey);
    setAllStoredData(updated);
  }

  useEffect(() => {
    (async () => {
      const key = await getKey();
      const decryptedData = await loadAndDecrypt(key);
      setAllStoredData(decryptedData);
    })();
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <CreateDataForm encryptMessage={addData} />
      <ShowDataList data={allStoredData} deleteData={deleteData}/>
    </div>
  );
};

export default Valuts;

