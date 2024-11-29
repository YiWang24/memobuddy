"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCheckUser } from "@/lib/features/auth/authSlice";
import { useSearchParams } from "next/navigation";
import Dashboard from "../../../components/Dashboard/Dashboard";
import { diaryApi } from "@/api";

export default function dashboard() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const [newNote, setNewNote] = useState("");
  const [newCheck, setNewCheck] = useState(false);
  const [diaryList, setDiaryList] = useState([]);
  const auth = sessionStorage.getItem("authState");
  const userId = JSON.parse(auth).user.id;
  const fetchDiaries = async () => {
    const diaries = await diaryApi.getDiaries(userId);
    setDiaryList(diaries.data);
  };

  useEffect(() => {
    fetchDiaries();
  }, []);

  useEffect(() => {
    const params = {
      googleId: searchParams.get("googleId"),
      email: searchParams.get("email"),
    };
    if (params.googleId && params.email) {
      dispatch(fetchCheckUser(params));
    }
  }, [searchParams]);

  return (
    <>
      <Dashboard

        diaryList={diaryList}
        setNewNote={setNewNote}
        newCheck={newCheck}
        setNewCheck={setNewCheck}
      ></Dashboard>
    </>
  );
}
