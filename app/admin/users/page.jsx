"use client";
import React, { useState, useEffect } from "react";


export default function UserList() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    try {
      const res = await fetch(`https://ariana-final-project.web.app/users`);
      const json = await res.json();
      console.log(json);
      setUsers (json);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
}