export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      backgroundred;
      {children}
    </div>
  );
}

// 레이아웃은 중첩이 가능하다.
{
  /* <LAyout>
  <InfoLayout>
    
  </InfoLayout>
</LAyout> */
}
