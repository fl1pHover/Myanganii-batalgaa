"use client";

export default function AdminPage() {
  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title");
    const description = formData.get("description");
    const type = formData.get("type");
    const date = formData.get("date");
    const images = formData.getAll("images");
    images.forEach(async (image) => {
      data.append("file", image);
      data.append("fileName", image.name);
    });

    try {
      let uploadedImages = await fetch("/api/upload", {
        method: "POST",
        body: data,
      }).then((d) => d.json());

      const res = await fetch(`/api/project`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: date,
          title: title,
          description: description,
          type: type,
          image: uploadedImages,
        }),
      }).then((d) => {
        return d.json();
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={submit} className="flex flex-col">
      <input
        type="text"
        name="title"
        className="border-solid border-2 "
        placeholder="title"
      />
      <textarea name="description" placeholder="description"></textarea>
      <p>type</p>
      <input type="radio" name="type" value="1" />
      <label htmlFor="1">1</label>
      <br></br>
      <input type="radio" name="type" value={"2"} />
      <label htmlFor="2">2</label>
      <br></br>
      <p>date</p>
      <input type="date" name="date" />
      <input type="file" name="images" multiple />
      <button type="submit">Submit</button>
    </form>
  );
}
