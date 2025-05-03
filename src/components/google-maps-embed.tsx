export function GoogleMapsEmbed(props: React.ComponentProps<"iframe">) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6581.416600821109!2d-119.81661062332172!3d34.43416387301559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e93f69b6b77a29%3A0x310258d0bbe016e4!2sSt.%20Athanasius%20Orthodox%20Church!5e0!3m2!1sen!2sus!4v1740705625255!5m2!1sen!2sus"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      {...props}
    ></iframe>
  );
}
