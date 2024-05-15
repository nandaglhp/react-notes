// import icons
import { Archive, BookOpen, Home, Notebook, Plus, Box, Database, Languages, LayoutPanelTop, Moon, User2 } from "lucide-react";

// objek yang digunakan untuk navigasi aplikasi. (side navbar)
export const links = [
  { label: "routes.home", href: "/", icon: Home },
  {
    label: "routes.notes",
    icon: Notebook,
    // Array dari sub-links yang mewakili aksi-aksi spesifik
    childrens: [
      {
        label: "routes.all",
        href: "/notes",
        icon: BookOpen,
      },
      {
        label: "routes.archived",
        href: "/archived",
        icon: Archive,
      },
      {
        label: "routes.create",
        href: "/create",
        icon: Plus,
      },
    ],
  },
];

export const features = [
  { label: "features.crud", icon: Database },
  { label: "features.auth", icon: User2 },
  { label: "features.dark", icon: Moon },
  { label: "features.rest", icon: LayoutPanelTop },
  { label: "features.context", icon: Box },
  { label: "features.i18n", icon: Languages },
];

export const languages = [
  {
    code: "en",
    label: "English",
    icon: "/flags/en.svg",
  },
  {
    code: "id",
    label: "Indonesia",
    icon: "/flags/id.svg",
  },
];

// file untuk menyimpan icons
