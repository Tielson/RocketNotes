import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import { useState } from 'react';

import { ButtonText } from '../../components/ButtonText';
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Container, Form } from "./styles";

export function New() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")


  const navigate = useNavigate()

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Adicionar titulo, por gentileza!")
    }
    if (newLink) {
      return alert("Deseja adicionar o link que está no campo de link, se desejar click em adicionar ou deixe o campo limpo.")
    }
    if (newTag) {
      return alert("Deseja adicionar a tag que está no campo de tag, se desejar click em adicionar ou deixe o campo limpo.")
    }
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="voltar" onClick={handleBack} />
          </header>

          <Input
            placeholder="Titulo"
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links uteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={index}
                  value={link}
                  onClick={() => { handleRemoveLink(link) }}
                />
              ))
            }
            <NoteItem isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadoress">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem isNew
                placeholder="Novo marcador"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag} />
            </div>
          </Section>

          <Button
            title="Salvar"
            onClick={handleNewNote}
          />

        </Form>
      </main>
    </Container>
  )
}