"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCheckUser } from "@/lib/features/auth/authSlice";
import { useSearchParams } from "next/navigation";
import Dashboard from "../../../components/Dashboard/Dashboard";
import { diaryApi } from "@/api";
import { weatherApi } from "@/api";
import { location } from "../../api/location";

export default function dashboard() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const [newCheck, setNewCheck] = useState(false);
  const [diaryList, setDiaryList] = useState([]);
  const auth = sessionStorage.getItem("authState");
  const userId = JSON.parse(auth).user.id;
  const fetchDiaries = async () => {
    const diaries = await diaryApi.getDiaries(userId);
    setDiaryList(diaries.data);
  };
  const handleWeather = async () => {
    location.getLocation();
    const loc = sessionStorage.getItem("user-coordinate");
    console.log("session" + loc);
    const parsedLoc = JSON.parse(loc);
    const lat = parsedLoc.lat;
    const lon = parsedLoc.lon;
    console.log(await weatherApi.getWeather(lat, lon));
  };

  const handleSave = async (e) => {
    setNewCheck(false);
    fetchDiaries();
    e.preventDefault();

    try {
      const response = await diaryApi.createDiary({ ...diaryData });
      console.log(response);

      if (response.status === 201) {
        alert("Your message has been submitted successfully!");
        setDiaryData({
          title: "",
          content: "",
        });
      } else {
        alert("There was an issue submitting your message. Please try again.");
      }
    } catch (e) {
      console.log("NO response");
      console.log(e);
    }
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
        newCheck={newCheck}
        setNewCheck={setNewCheck}
        getWeather={handleWeather}
      ></Dashboard>
    </>
  );
}
