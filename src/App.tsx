import React, { useEffect, useState } from "react";
import { useConvex, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { GameMap } from "./components/GameMap";
import { Sidebar } from "./components/Sidebar";
import { CharacterSheet } from "./components/CharacterSheet";
import { ConversationView } from "./components/ConversationView";
import { Toaster } from "./components/ui/toaster";
import { useToast } from "./components/ui/use-toast";
import { cn } from "./lib/utils";
import { defaultCharacters } from "../data/characters";
import { Id } from "../convex/_generated/dataModel";

function App() {
  const convex = useConvex();
  const { toast } = useToast();
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [conversationPartnerId, setConversationPartnerId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCharacterSheetOpen, setIsCharacterSheetOpen] = useState(false);
  const [isConversationOpen, setIsConversationOpen] = useState(false);
  const [userId, setUserId] = useLocalStorage<string>("ai-town-user-id", "");

  // 如果还没有用户 ID，创建一个
  useEffect(() => {
    if (!userId) {
      const newUserId = crypto.randomUUID();
      setUserId(newUserId);
    }
  }, [userId, setUserId]);

  // 获取角色列表（从 Convex 或本地）
  const charactersFromConvex = useQuery(api.characters.list);
  const characters = charactersFromConvex ?? defaultCharacters;

  // 如果 Convex 未连接，使用默认角色
  const [localCharacters, setLocalCharacters] = useState(characters);

  useEffect(() => {
    if (charactersFromConvex) {
      setLocalCharacters(charactersFromConvex);
    } else {
      setLocalCharacters(defaultCharacters);
    }
  }, [charactersFromConvex]);

  const handleSelectCharacter = (id: string) => {
    setSelectedCharacterId(id);
    setIsCharacterSheetOpen(true);
  };

  const handleStartConversation = (id: string) => {
    setConversationPartnerId(id);
    setIsConversationOpen(true);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-neutral-900 text-white">
      <GameMap
        characters={localCharacters}
        onSelectCharacter={handleSelectCharacter}
        onStartConversation={handleStartConversation}
        selectedCharacterId={selectedCharacterId}
        userId={userId}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        characters={localCharacters}
        onSelectCharacter={handleSelectCharacter}
        selectedCharacterId={selectedCharacterId}
      />
      <CharacterSheet
        characterId={selectedCharacterId}
        isOpen={isCharacterSheetOpen}
        onClose={() => {
          setIsCharacterSheetOpen(false);
          setSelectedCharacterId(null);
        }}
        userId={userId}
      />
      <ConversationView
        isOpen={isConversationOpen}
        onClose={() => {
          setIsConversationOpen(false);
          setConversationPartnerId(null);
        }}
        characterId={conversationPartnerId}
        userId={userId}
      />
      <Toaster />
    </div>
  );
}

export default App;
