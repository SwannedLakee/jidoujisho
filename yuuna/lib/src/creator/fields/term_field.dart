import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:yuuna/creator.dart';
import 'package:yuuna/dictionary.dart';
import 'package:yuuna/models.dart';

/// Returns the word or phrase particular to a selected headword.
class TermField extends FieldNua {
  /// Initialise this field with the predetermined and hardset values.
  TermField._privateConstructor()
      : super(
          uniqueKey: key,
          label: 'Term',
          description: 'Dictionary word or phrase',
          icon: Icons.speaker_notes_outlined,
        );

  /// Get the singleton instance of this field.
  static TermField get instance => _instance;

  static final TermField _instance = TermField._privateConstructor();

  /// The unique key for this field.
  static const String key = 'term';

  @override
  String onCreatorOpenAction({
    required BuildContext context,
    required WidgetRef ref,
    required AppModel appModel,
    required CreatorModel creatorModel,
    required String term,
    required String reading,
    required List<DictionaryEntry> entries,
  }) {
    return term;
  }
}
