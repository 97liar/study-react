import { useUser } from "src/hooks/useUser";
import Head from "next/head";
import { useImperativeHandle } from "react";

export const User = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <ul>
        <li>{user.email}</li>
        <li>{user.username}</li>
        <li>{user.address.city}</li>
        <li>{user.phone}</li>
        <li>{user.website}</li>
        <li>{user.company.name}</li>
      </ul>
    </div>
  );
};
